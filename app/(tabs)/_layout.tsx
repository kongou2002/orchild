import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@rneui/themed";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useTheme();

  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="home"
              color={focused ? theme.colors.primary : "#919191"}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="heart"
              color={focused ? theme.colors.primary : "#919191"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
