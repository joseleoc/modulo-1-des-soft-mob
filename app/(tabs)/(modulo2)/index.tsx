import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { DefaultProducts } from "@/constants/Products";

export default function Modulo2Screen() {
  const [products, setProducts] = useState(DefaultProducts);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ThemedView style={styles.productsList}>
          {products.map((product) => (
            <Link
              href={{
                pathname: "/details/[id]",
                params: { id: product.id },
              }}>
              <ThemedView key={product.id} style={styles.productContainer}>
                <Image
                  source={product.image}
                  style={styles.productImage}
                  placeholder={`Image of ${product.title}`}
                />
                <ThemedView>
                  <ThemedText>{product.title}</ThemedText>
                  <ThemedText>${product.price}</ThemedText>
                </ThemedView>
              </ThemedView>
            </Link>
          ))}
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  productDescription: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
  },
  productsList: {
    gap: 24,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
  },
});
