import { Stack } from "expo-router";

export default function ViewImageLayout({children}) {
    return (
        <Stack>
            <Stack.Screen
                name="[path]"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}
