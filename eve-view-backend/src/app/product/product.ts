import typeIDsRaw from '../../../data/typeIDs.json';
import blueprintsRaw from '../../../data/blueprints.json';

const typeIDs: Record<string, TypeID> = typeIDsRaw as Record<string, TypeID>;
const blueprints: Record<string, Blueprint> = blueprintsRaw as Record<string, Blueprint>;

type TypeID = {
    groupID: number,
    iconId?: number,
    marketGroupID?: number,
    portionSize: number,
    published: boolean,
    mass?: number,
    name: {
        en?: string,
        de?: string,
        fr?: string,
        ru?: string,
        zh?: string,
        ja?: string,
    },
    description?: {
        en: string,
        de?: string,
        fr?: string,
        ru?: string,
        zh?: string,
        ja?: string,
    }
}

type QuantitiedTypeID = {
    quantity: number;
    typeID: number;
};

type QuantitiedSkill = {
    level: number;
    typeID: number;
};

type Blueprint = {
    activities: {
        copying?: {
            time: number;
        };
        manufacturing?: {
            materials?: QuantitiedTypeID[];
            products?: QuantitiedTypeID[];
            skills?: QuantitiedSkill[];
            time: number;
        };
        invention?: {
            materials?: QuantitiedTypeID[];
            products?: (QuantitiedTypeID & {
                probability?: number;
            })[];
            skills?: QuantitiedSkill[];
            time: number;
        };
        research_material?: {
            materials?: QuantitiedTypeID[];
            skills?: QuantitiedSkill[];
            time: number;
        };
        research_time?: {
            materials?: QuantitiedTypeID[];
            skills?: QuantitiedSkill[];
            time: number;
        };
    },
    blueprintTypeID: number;
    maxProductionLimit: number;
};

const itemBlueprintMap: Record<number, Blueprint[]> = {};

Object.keys(blueprints).forEach(blueprintId => {
    const blueprint = blueprints[blueprintId];

    if (!blueprint.activities.manufacturing?.products) return;

    blueprint.activities.manufacturing.products.forEach(product => {
        if (!itemBlueprintMap[product.typeID]) {
            itemBlueprintMap[product.typeID] = [];
        } else {
            console.log('1111!!!!', product.typeID);
        }

        itemBlueprintMap[product.typeID].push(blueprint);
    });
});

export const EveAPI = {
    getProduct: (id: string) => {
        if (typeIDs[id]) {
            const item = typeIDs[id];
            const blueprints = itemBlueprintMap[Number(id)];
            return {
                id,
                name: item.name.en,
                description: item.description?.en,
                marketGroupID: item.marketGroupID,
                blueprintId: blueprints && blueprints[0].blueprintTypeID,
            };
        }
    },

    getBlueprint: (id: string) => {
        const blueprint = blueprints[id];

        console.log("BP!!!", blueprint);

        if (blueprint?.activities.manufacturing) {
            const item = blueprints[id];
            const typeId = item.blueprintTypeID;
            const manufacturing = blueprint.activities.manufacturing;
            
            return {
                id,
                typeId,
                manufacturing: {
                    materials: manufacturing?.materials?.map(product => ({
                        product: EveAPI.getProduct(String(product.typeID)),
                        quantity: product.quantity
                    })),
                    products: manufacturing?.products?.map(product => ({
                        product: EveAPI.getProduct(String(product.typeID)),
                        quantity: product.quantity
                    }))
                }
            };
        }
    }
}
