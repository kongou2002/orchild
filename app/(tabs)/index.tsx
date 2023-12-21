import { Tab, TabView, makeStyles } from "@rneui/themed";
import { FlatList, View } from "react-native";

import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import PlantItem from "../../components/PlantItem";
import { Categories } from "../../db";
import { getAllCategories } from "../../utils";

export default function TabOneScreen() {
  const styles = useStyles();
  const plants = Categories;
  const [index, setIndex] = useState(0);
  const cate = getAllCategories();

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "100%",
          marginTop: 70,
        }}
      >
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: "white",
            height: 3,
          }}
          variant="primary"
        >
          {cate.map((item) => (
            <Tab.Item
              title={item}
              titleStyle={{ fontSize: 12, fontWeight: "700" }}
            />
          ))}
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
          {cate.map((cate, index) => (
            <TabView.Item
              style={{
                width: "100%",
              }}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 70 }}
              >
                <FlatList
                  style={styles.list}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={false}
                  data={plants[index].items}
                  keyExtractor={(plant) => plant.name}
                  renderItem={({ item }) => (
                    <PlantItem item={item} type="normal" />
                  )}
                />
              </ScrollView>
            </TabView.Item>
          ))}
        </TabView>
      </View>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 700,
  },
}));
