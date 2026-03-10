import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { IMAGES } from "@/images";

const ModalCloseButton = function () {
    const router = useRouter();

    const handleBackPress = () => {
        router.back();
    }

    return (
        <View style={styles.closeButtonContainer}>
            <Pressable
                hitSlop={10}
                onPress={handleBackPress}
            >
                <Text style={styles.closeButtonText}>X</Text>
            </Pressable>
        </View>
    );
}

export default function ViewImageModal() {
    const { path } = useLocalSearchParams<{ path: string }>();
    const image = IMAGES[path];

    return (
        <View style={styles.container}>
            <ModalCloseButton />

            <Image
                style={styles.image}
                contentFit="contain"
                source={image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    closeButtonContainer: {
        position: "absolute",
        top: 40,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    closeButtonText: {
        color: "black",
        fontSize: 16,
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});