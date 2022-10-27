import React from "react";
import Navigation from "components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from 'components/Loader/Loader';

export default function SharedLayout() {
    return (
        <>
            <Navigation />
            <Suspense fallback={<Loader />}>
                <Outlet />
                </Suspense>
        </>
    )
}