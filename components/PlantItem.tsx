import { View, Text } from "react-native";
import React, { FC, useState } from "react";
import { AirbnbRating, Button, Card, Dialog, useTheme } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { Plant } from "../db";
import { theme } from "../styles/theme";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useAppContext } from "../context/Context";

interface PlantItemProps {
  item: Plant;
  type: "normal" | "favourite";
}

const PlantItem: FC<PlantItemProps> = ({ item, type }) => {
  const { favourites, addData, deleteData } = useAppContext();
  const [dialog, setDialog] = useState<boolean>(false);
  const { theme } = useTheme();

  const isFavourite = favourites.includes(
    favourites.find((p) => p.name === item?.name) || ({} as Plant),
    0
  );
  return (
    <Card>
      <TouchableOpacity onPress={() => router.push(`/${item.name}`)}>
        <Card.Image
          source={{
            uri: item.image,
          }}
          borderRadius={10}
        />
      </TouchableOpacity>
      <Dialog isVisible={dialog} onBackdropPress={() => setDialog(false)}>
        <Dialog.Title title="Remove item" />
        <Text>Do you want to remove {item.name} from the favorite?</Text>
        <Dialog.Actions>
          <Dialog.Button
            titleStyle={{ color: "red" }}
            onPress={() => {
              deleteData(item), setDialog(false);
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
      <View style={{ marginTop: 5 }}>
        <Text
          style={{
            color: theme.colors.primary,
            fontWeight: "700",
            fontSize: 17,
          }}
        >{`${item.name} | ${item.price}$`}</Text>

        <View
          style={{
            marginTop: 2,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <AirbnbRating
            ratingContainerStyle={{ width: 100 }}
            selectedColor={theme.colors.primary}
            showRating={false}
            isDisabled={true}
            defaultRating={+item.rating}
            size={15}
          />
          {!isFavourite ? (
            <Button
              color="secondary"
              containerStyle={{
                borderColor: theme.colors?.secondary,
                borderRadius: 10,
              }}
              onPress={() => addData(item)}
              icon={
                <FontAwesome
                  name="heart-o"
                  size={20}
                  color={theme.colors.primary}
                />
              }
            />
          ) : (
            <Button
              color="secondary"
              containerStyle={{
                borderColor: theme.colors?.secondary,
                borderRadius: 10,
              }}
              onPress={() => setDialog(true)}
              icon={<FontAwesome name="heart" size={20} color="#FF621D" />}
            />
          )}
        </View>
      </View>
    </Card>
  );
};

export default PlantItem;
