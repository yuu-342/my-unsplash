import { Dispatch, SetStateAction } from 'react';

export type Item = {
  id: number;
  name: string;
  note: string;
  image_url: string;
  category_id: number;
};

export type ItemList = {
  id: number;
  name: string;
  items: Item[];
};

export type SelectItemContextType = {
  selectItem: Item | object;
  setSelectItem: Dispatch<SetStateAction<Item>>;
}

export type ItemListContextType = {
  itemList: ItemList[];
  setItemList: Dispatch<SetStateAction<ItemList[] | never[]>>
}

export type ShoppingListContextType = {
  shoppingList: Item[];
  setShoppingList: Dispatch<SetStateAction<Item[] | never[]>>
}
