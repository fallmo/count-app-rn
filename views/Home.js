import React, { useContext, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Clickable, Rounded } from "../components/Button";
import { CountItem } from "../components/CountItem";
import { CText } from "../components/CText";
import { CreateModal } from "../components/parts/CreateModal";
import { ManageModal } from "../components/parts/ManageModal";
import { Context } from "../context/Context";
import _def from "../theme";

function Home() {
  const { list } = useContext(Context);
  const [createOpen, OpenCreate] = useState(false);
  const [viewOpen, OpenView] = useState(null);

  return (
    <View style={s.container}>
      <CreateModal isOpen={createOpen} Close={() => OpenCreate(false)} />
      <ManageModal count={viewOpen} Close={() => OpenView(null)} />
      <View style={s.header}>
        <CText size={50} weight="300" center>
          Count
        </CText>
      </View>
      <View style={s.body}>
        <CText weight="600">Active Counts</CText>
        <ScrollView style={s.list}>
          {list.map(item => (
            <Clickable key={item.id} onPress={() => OpenView(item)}>
              <CountItem {...item} />
            </Clickable>
          ))}
        </ScrollView>
      </View>
      <View style={s.footer}>
        <Rounded onPress={() => OpenCreate(true)} />
      </View>
    </View>
  );
}

export default Home;

const s = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  header: {
    height: "20%",
    justifyContent: "center",
  },
  body: {
    paddingHorizontal: 10,
    flex: 1,
  },
  footer: {
    paddingVertical: 10,
  },
  list: {
    paddingVertical: 5,
  },
});
