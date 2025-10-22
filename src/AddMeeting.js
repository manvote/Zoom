import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    TextInput,
    FlatList
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "./components/Navbar";
import Icons from "react-native-vector-icons/Ionicons";


function AddMeeting({navigation}) {

    const [Data, setData] = useState([]);
    const handleCreateMeeting = async () => {
        try {
            const response = await fetch("http://10.0.2.2:8080/api/meetings/create", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                // Alert.alert("Meeting Created", `Meeting ID: ${data.meetingId || "N/A"}`);
                setData((prev) => [...prev, data]);
            } else {
                Alert.alert("Error", "Failed to create meeting");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Something went wrong while creating the meeting");
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Search contact or dial" />

                <View style={styles.buttonGroup}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => handleCreateMeeting()}
                            style={styles.linkButton}
                        >
                            <Icons name="link" size={40} color="#4BA4D0"></Icons>
                        </TouchableOpacity>
                        <Text style={styles.linkText}>New Meet</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate("joinmeeting")} style={styles.linkButton}>
                            <Icons name="videocam" color="#4BA4D0" size={40} />
                        </TouchableOpacity>
                        <Text style={styles.linkText}>Join</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate("joinmeeting")} style={styles.linkButton}>
                            <Icons name="person-add" color="#4BA4D0" size={40} />
                        </TouchableOpacity>
                        <Text style={styles.linkText}>Join</Text>
                    </View>
                </View>
                {Data.length === 0 ? (
                    <Text style={styles.emptyText}>No meetings yet</Text>
                ) : (
                    <FlatList
                        data={Data}
                        // keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <View style={styles.meetingInfo}>
                                <Text style={styles.text}>#{index + 1}</Text>
                                <Text style={styles.text}>Meeting ID: {item.meetingId}</Text>
                                {item.joinLink && (
                                    <TouchableOpacity>
                                        <Text style={{ color: "#4BA4D0" }}>Link: {item.joinLink}</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}
                    />
                )}
            </View>
            <Navbar />
        </SafeAreaView>
    );
}
export default AddMeeting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 50
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#D9D9D9',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 16
    },
    buttonGroup: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 50,
        justifyContent: 'flex-start'
    },
    linkButton: {
        alignItems: "center",
        backgroundColor: "#D9D9D982",
        borderRadius: 8,
        borderRadius: "50%",
        justifyContent: 'space-around',
        marginHorizontal: 10,
        height: 100,
        width: 100,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    linkText: {
        color: "black",
        fontWeight: "bold",
        paddingTop: 20
    },
    linkText1: {
        color: "white",
        fontWeight: "bold",
    },
    linkButton1: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "#4BA4D0",
        borderRadius: 8,
        borderRadius: 20,
        marginTop: 20,
    },
    meetingInfo: {
        marginTop: 20,
        alignItems: "center",
    },
    emptyText: {
        paddingVertical: 20,
        fontSize: 14,
        fontWeight: 500
    }
});