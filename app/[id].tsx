import {
  AirbnbRating,
  Dialog,
  FAB,
  Image,
  Text,
  makeStyles,
  useTheme,
} from "@rneui/themed";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPlantByName } from "../utils";
import { Button } from "@rneui/base";
import { View } from "react-native";
import { theme } from "../styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppContext } from "../context/Context";
import { Plant } from "../db";
import { useState } from "react";

export default function Page() {
  const { id } = useLocalSearchParams();
  const { theme } = useTheme();
  const [dialog, setDialog] = useState<boolean>(false);
  const styles = useStyles();
  const plant = getPlantByName(id as string);
  const { favourites, addData, deleteData } = useAppContext();
  const isFavourite = favourites.includes(
    favourites.find((p) => p.name === plant?.name) || ({} as Plant),
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <Dialog isVisible={dialog} onBackdropPress={() => setDialog(false)}>
        <Dialog.Title title="Remove item" />
        <Text>Do you want to remove {plant?.name} from the favorite?</Text>
        <Dialog.Actions>
          <Dialog.Button
            titleStyle={{ color: "red" }}
            onPress={() => {
              deleteData(plant || ({} as Plant)), setDialog(false);
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
      <Text h3 style={styles.title}>
        {id}
      </Text>
      <View style={{ width: "100%", alignItems: "center" }}>
        <AirbnbRating
          ratingContainerStyle={{ width: 100 }}
          selectedColor={theme.colors?.primary}
          showRating={false}
          isDisabled={true}
          defaultRating={Number(plant?.rating) || 0}
          size={15}
        />
      </View>
      <Image
        style={{
          width: "100%",
          height: 200,
          marginVertical: 10,
        }}
        borderRadius={20}
        source={{
          uri: plant?.image,
        }}
      />
      <Text style={{ marginTop: 10 }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam vel
        veniam corrupti libero dolores, sequi illo quia. In consequuntur velit
        eius aspernatur ut fuga necessitatibus sit odit quia quibusdam.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>Price: </Text>
          <Text
            style={[
              styles.text,
              { color: theme.colors.primary, fontWeight: "500" },
            ]}
          >
            {plant?.price}$
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>Color: </Text>
          <FAB
            title="  "
            color={plant?.color}
            size="small"
            containerStyle={{ borderWidth: 0.3 }}
            style={{
              height: 30,
              marginLeft: 5,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>Flower Size: </Text>
          <Text style={[styles.text, { color: "orange", fontWeight: "500" }]}>
            {plant?.flowerSize}
          </Text>
        </View>
      </View>
      <View style={{ paddingVertical: 20 }}>
        {isFavourite ? (
          <Button
            title="Unlike"
            color={theme.colors.primary}
            radius={20}
            onPress={() => setDialog(true)}
          />
        ) : (
          <Button
            color={theme.colors.primary}
            radius={20}
            title="Like"
            onPress={() => addData(plant || ({} as Plant))}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  title: {
    color: theme.colors.primary,
    fontWeight: "800",
    textAlign: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 19,
  },
}));
