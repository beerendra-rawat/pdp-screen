import { View, Text, Button, Modal, StyleSheet } from "react-native";
export default function CustomeModal({ visible, onClose }) {
    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.modalBackground}>
                <View style={styles.modalBox}>
                    <Text>Hello! This is Pressable Button</Text>
                    <Button onPress={onClose} title="Close" />
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        width: "80%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});
