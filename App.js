import React, { useContext, useEffect } from "react";
import { SafeAreaView, View, StatusBar, StyleSheet } from "react-native";
import Home from "./views/Home";
import { Context, Provider } from "./context/Context";

function App() {
  const { refreshList } = useContext(Context);
  useEffect(() => {
    refreshList();
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{ ...s.full, ...s.page }}>
        <SafeAreaView style={s.full}>
          <Home />
        </SafeAreaView>
      </View>
    </>
  );
}

export default function Wrapper() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

const s = StyleSheet.create({
  page: { backgroundColor: "#E8E8E8" },
  full: { flex: 1 },
});
