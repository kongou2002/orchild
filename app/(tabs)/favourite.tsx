import { Button, Dialog, Text, makeStyles } from "@rneui/themed";
import { Plant } from "../../db";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, View } from "react-native";
import PlantItem from "../../components/PlantItem";
import { useAppContext } from "../../context/Context";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "../../styles/theme";
import { FontAwesome } from "@expo/vector-icons";

export default function TabTwoScreen() {
  const styles = useStyles();
  const { favourites, deleteAll } = useAppContext();
  const [dialog, setDialog] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Dialog isVisible={dialog} onBackdropPress={() => setDialog(false)}>
        <Dialog.Title title="Remove item" />
        <Text>Do you want to remove all item in the favorite?</Text>
        <Dialog.Actions>
          <Dialog.Button
            titleStyle={{ color: "red" }}
            onPress={() => {
              deleteAll(), setDialog(false);
            }}
          >
            Remove
          </Dialog.Button>
          <Dialog.Button
            titleStyle={{ color: "black" }}
            onPress={() => setDialog(false)}
          >
            Cancel
          </Dialog.Button>
        </Dialog.Actions>
      </Dialog>
      {favourites.length > 1 && (
        <View
          style={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: [{ translateX: -50 }],
            zIndex: 10,
          }}
        >
          <Button
            radius={999}
            onPress={() => setDialog(true)}
            buttonStyle={{ paddingHorizontal: 20 }}
            color="orange"
            title="Remove all"
          />
        </View>
      )}
      {favourites?.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 70 }}
        >
          <FlatList
            style={styles.list}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            data={favourites || []}
            keyExtractor={(plant) => plant.name}
            renderItem={({ item }) => (
              <PlantItem item={item} type="favourite" />
            )}
          />
        </ScrollView>
      ) : (
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 18,
          }}
        >
          <Text h3 style={{ textAlign: "center", fontWeight: "500" }}>
            Favorite list is empty!
          </Text>
          <FontAwesome name="ban" size={45} />
        </View>
      )}
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  list: {
    width: "100%",
    paddingBottom: 20,
  },
}));
