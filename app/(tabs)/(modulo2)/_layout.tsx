import { Stack } from "expo-router";

export default function Modulo2Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Lista de productos" }} />
      <Stack.Screen name="details/[id]" options={{ title: "Detalles de producto" }} />
    </Stack>
  );
}
