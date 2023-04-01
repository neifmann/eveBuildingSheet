import { BlueprintPage } from "pages/BlueprintPage/BlueprintPage"
import React, { FC } from "react"
import { Route, BrowserRouter, Routes, useParams } from "react-router-dom"
import App from "./pages/App/App"
import { ProductPage } from "./pages/ProductPage/ProductPage"

export const AppIndex:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='item/:id' element={<ItemRoute />} />
                <Route path='blueprint/:id' element={<BlueprintRoute />} />
                <Route path='/' element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

const ItemRoute: FC = () => {
    const { id } = useParams();

    return <ProductPage id={Number(id)} />
}

const BlueprintRoute: FC = () => {
    const { id } = useParams();

    if(!id) return <App />;

    return <BlueprintPage id={id} />
}