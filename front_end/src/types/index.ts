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


type ActionInterface<T extends string, U> = {
  type: T;
  value: U;
}

export type AllAction = ActionInterface<'addShoppingList', Item>
  | ActionInterface<'removeShoppingList', never>
  | ActionInterface<'setItem', Item | object>
  | ActionInterface<'setItemList', ItemList[]>;

export type ShoppingListSate = {
  shoppingList: (Item | never)[];
};

export type ItemListState = {
  itemList: ItemList[];
};

export type SelectItemState = {
  selectItem: Item | object;
}

export type State = ShoppingListSate & ItemListState & SelectItemState