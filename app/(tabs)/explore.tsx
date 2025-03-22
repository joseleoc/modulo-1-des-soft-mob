import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Link } from "expo-router";
import { HelloWave } from "@/components/HelloWave";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" numberOfLines={1} adjustsFontSizeToFit>
          Módulo 2 <HelloWave />
        </ThemedText>
        <ThemedText type="subtitle">Desarrollo de software móvil</ThemedText>
      </ThemedView>
      <ThemedView style={styles.buttonContainer}>
        <Link href="/(tabs)/(modulo2)" style={styles.navigateButton}>
          <ThemedText>Navegar a la siguiente página</ThemedText>
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "column",
    gap: 8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  navigateButton: {
    backgroundColor: "#808080",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});
