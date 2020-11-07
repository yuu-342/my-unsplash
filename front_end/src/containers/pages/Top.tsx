import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Item, ItemList } from 'types';
import SideBar from 'containers/organisms/SideBar';
import ShoppingList from 'containers/organisms/ShoppingList';
import AddItemForm from 'containers/organisms/AddItemForm';
import CategoryBox from 'containers/organisms/CategoryBox';
import ItemInfo from "../organisms/ItemInfo";
import { SelectItemContext } from 'contexts/selectItem';
import { ItemListContext } from 'contexts/itemList';
import { ShoppingListContext } from 'contexts/shoppingList';
import axios from 'axios';
import 'assets/css/pages/Top.css';

type OnClickFunction = () => void

function isItem(arg: any): arg is Item {
  return arg.id !== undefined;
}


const Top:React.FC = ()=> {
  const [showRightSideBar, setShowRightSideBar] = useState('ShoppingList');
  const { selectItem, setSelectItem } = useContext(SelectItemContext);
  const { itemList, setItemList } = useContext(ItemListContext);
  const { shoppingList, setShoppingList } = useContext(ShoppingListContext);

  useEffect(() => {
    let unmounted = false;
    const f = async () => {
      const res = await axios.get('http://localhost:3001/category');
      if (!unmounted) {
        await setItemList(res.data)
      }
    };
    f();
    const cleanup = () => {
      unmounted = true;
    };
    return cleanup;
  }, []);

  const handleShowItemForm: OnClickFunction = useCallback(() => {
    setShowRightSideBar('ItemForm')
  }, []);

  const handleShowShoppingList: OnClickFunction = useCallback(() => {
    setShowRightSideBar('ShoppingList')
  }, []);

  const handleShowItemInfo = (item: Item) => {
    setSelectItem(item);
    setShowRightSideBar('ItemInfo');
  };

  const addToShoppingList = () => {
    setShoppingList([...shoppingList, selectItem] as Item[]);
    setSelectItem({} as Item);
    handleShowShoppingList()
  };

  return (
    <div className='container'>
      <SideBar/>
        <div className='content'>
          <h2 className='content-title'><span className='font--yellow'>Shoppingify</span> allows you take your shopping list wherever you go</h2>
            {
              itemList.map((itemList: ItemList) => {
                return <CategoryBox onClick={handleShowItemInfo} itemList={itemList} key={itemList.id}/>
              })
            }
          </div>
        {
          isItem(selectItem) ? <ItemInfo item={selectItem} addToList={addToShoppingList} cancelFunc={handleShowShoppingList}/>
          : showRightSideBar === 'ItemForm' ? <AddItemForm categories={itemList.map((itemList: ItemList) => { return itemList.name })} onClick={handleShowShoppingList}/>
          : showRightSideBar === 'ShoppingList' ? <ShoppingList onClick={handleShowItemForm} shoppingList={shoppingList}/>
          : null
      }
    </div>
  )
};

export default Top;