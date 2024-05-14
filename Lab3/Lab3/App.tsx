import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Product from "./Products/Product";
import { BottomNavigation, Text } from "react-native-paper";
import Product_Add from "./Products/Product_Add";
import Product_Search from "./Products/Product_Search";
import Product_Details from "./Products/Product_Details";
import { useState } from "react";


export default function App() {
  const [index, setIndex] = useState(0);  
  const [routes] = useState([
    { key: 'productList', title: 'Products' , focusedIcon:'format-list-bulleted'},
    { key: 'productAdd', title: 'Add' , focusedIcon:'plus-box-outline'},
    { key: 'productSearch', title: 'Search' , focusedIcon:'magnify'},
    { key: 'productDetails', title: 'Details' , focusedIcon:'cellphone-link'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    productList: Product,
    productAdd: Product_Add,
    productSearch: Product_Search,
    productDetails: Product_Details,
  });
  
  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}