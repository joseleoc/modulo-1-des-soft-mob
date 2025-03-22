import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { DefaultProducts } from "@/constants/Products";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useCallback, useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<any>();

  const getProductById = useCallback(() => {
    const product = DefaultProducts.find((product) => product.id === Number(id));
    if (!product) return;
    product.image = product.image.replace("/100", "/200");
    setProduct(product);
  }, [id]);

  useEffect(() => {
    console.log("Creando componente de detalles de producto");
    return () => {
      console.log("Destruyendo componente de detalles de producto");
    };
  }, []);

  useEffect(() => {
    getProductById();
  }, [id]);

  if (!product) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <Image
          source={product.image}
          style={styles.productImage}
          placeholder={`Image of ${product.title}`}
        />
        <ThemedText type="title" style={styles.productTitle}>
          {product.title}
        </ThemedText>
        <ThemedText type="subtitle">${product.price}</ThemedText>
        <ThemedText>{product.description}</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 16,
  },
  productImage: {
    width: 200,
    height: 200,
    backgroundColor: "#FFFFFF",
  },
  productTitle: {
    textAlign: "center",
  },
});
