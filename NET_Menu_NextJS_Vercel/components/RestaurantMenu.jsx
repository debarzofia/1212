"use client";

import { useEffect } from "react";
import { menuMarkup } from "../data/markup";
import { initializeMenu } from "../lib/menu";

/**
 * The existing restaurant design is rendered as a React component.
 * The menu interactions initialize only in the browser, after hydration.
 * Food photos and prices can be changed in data/menu.js.
 */
export default function RestaurantMenu() {
  useEffect(() => {
    initializeMenu();
  }, []);

  return <div id="net-restaurant-root" dangerouslySetInnerHTML={{ __html: menuMarkup }} />;
}
