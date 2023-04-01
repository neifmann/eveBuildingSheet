import { cn } from '@bem-react/classname';
import React, {FC, useEffect, useState} from 'react';

import { Blueprint as BlueprintResponseType, FetchBlueprint } from 'api/blueprint';

import { Blueprint } from 'components/Blueprint/Blueprint';
import { Spinner } from 'components/Spinner/Spinner';

const cnBlueprintPage = cn('BlueprintPage');

export interface IBlueprintPageProps {
    id: string;
};

export const BlueprintPage: FC<IBlueprintPageProps> = ({id}) => {
    const [blueprintData, setBlueprintData] = useState<BlueprintResponseType>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetcher = async () => {
            setBlueprintData(await FetchBlueprint(id));
            setIsLoading(false);
        }

        fetcher();
    }, [id]);

    return (
        <div className={cnBlueprintPage()}>
            123123
            {
                isLoading && <Spinner className={cnBlueprintPage('spinner')} />
            }
            {
                blueprintData && 
                <Blueprint 
                    manufacturing={blueprintData.manufacturing}
                    onExpand={FetchBlueprint}
                />
            }
        </div>
    )
}

