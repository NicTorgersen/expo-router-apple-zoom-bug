import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { IMAGES } from "@/images";

const image = IMAGES["cat-app.jpg"];

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Minimal Reproducible Example Of Expo Router Apple Zoom Bug!</Text>

            <Link href="/view-image/cat-app.jpg" asChild>
                <Pressable>
                    <Link.AppleZoom>
                        <Image
                            contentFit="cover"
                            source={image}
                            style={styles.previewImage}
                        />
                    </Link.AppleZoom>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    previewImage: {
        width: 100,
        height: 100,
    },
});