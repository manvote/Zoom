// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// // const OTPScreen = () => {
// //   const [otp, setOtp] = useState(['', '', '', '', '', '']);
  
// //   const handleOtpChange = (text, index) => {
// //     const newOtp = [...otp];
// //     newOtp[index] = text;
// //     setOtp(newOtp);
// //   };

// //   const handleSubmit = () => {
// //     const enteredOtp = otp.join('');
    
// //     if (enteredOtp.length !== 6) {
// //       Alert.alert('Error', 'Please enter a valid 6-digit OTP');
// //       return;
// //     }

// //     // Simulate OTP verification (you can replace this with an API call)
// //     const correctOtp = '123456';  // You should replace this with your actual OTP logic

// //     if (enteredOtp === correctOtp) {
// //       Alert.alert('Success', 'OTP Verified Successfully');
// //       // Navigate to the next screen or perform other actions here
// //     } else {
// //       Alert.alert('Error', 'Invalid OTP. Please try again.');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Enter OTP</Text>
// //       <View style={styles.otpContainer}>
// //         {otp.map((digit, index) => (
// //           <TextInput
// //             key={index}
// //             style={styles.otpInput}
// //             keyboardType="numeric"
// //             maxLength={1}
// //             value={digit}
// //             onChangeText={(text) => handleOtpChange(text, index)}
// //             autoFocus={index === 0} // Auto-focus on the first input field
// //           />
// //         ))}
// //       </View>

// //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// //         <Text style={styles.buttonText}>Verify OTP</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingHorizontal: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   otpContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     width: '80%',
// //     marginBottom: 20,
// //   },
// //   otpInput: {
// //     width: 50,
// //     height: 50,
// //     borderWidth: 1,
// //     borderRadius: 10,
// //     textAlign: 'center',
// //     fontSize: 24,
// //     marginHorizontal: 5,
// //   },
// //   button: {
// //     backgroundColor: '#007BFF',
// //     paddingVertical: 12,
// //     paddingHorizontal: 40,
// //     borderRadius: 10,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //   },
// // });

// // export default OTPScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const OTPScreen = () => {
//   const [otp, setOtp] = useState(['', '', '', '']); // OTP state

//   // Handle OTP change
//   const handleOtpChange = (text, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);
//   };

//   // Submit OTP
//   const handleSubmit = async () => {
//     const enteredOtp = otp.join('');

//     if (enteredOtp.length !== 4) {
//       Alert.alert('Error', 'Please enter a valid 6-digit OTP');
//       return;
//     }

//     try {
//       // Call the backend API to verify OTP
//       const response = await axios.post('http://10.0.2.2:8080/api/otp/verify', {
//         otp: enteredOtp,
//       });

//       if (response.data.success) {
//         Alert.alert('Success', 'OTP Verified Successfully');
//         // Navigate to the next screen or perform other actions
//       } else {
//         Alert.alert('Error', response.data.message); // Display message from backend
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Failed to verify OTP. Please try again later.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter OTP</Text>
//       <View style={styles.otpContainer}>
//         {otp.map((digit, index) => (
//           <TextInput
//             key={index}
//             style={styles.otpInput}
//             keyboardType="numeric"
//             maxLength={1}
//             value={digit}
//             onChangeText={(text) => handleOtpChange(text, index)}
//             autoFocus={index === 0} // Auto-focus on the first input field
//           />
//         ))}
//       </View>

//       <Button title="Verify OTP" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     marginBottom: 20,
//   },
//   otpInput: {
//     width: 50,
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 10,
//     textAlign: 'center',
//     fontSize: 24,
//     marginHorizontal: 5,
//   },
// });

// export default OTPScreen;



import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const OTPScreen = ({ route, navigation }) => {
  const { email } = route.params; // Email passed from the previous screen
  const [otp, setOtp] = useState(['', '', '', '']); // OTP state for 6 digits

  // Handle OTP change
  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 4) {
      Alert.alert('Error', 'Please enter a valid 4-digit OTP');
      return;
    }

    try {
      // Call the backend API to verify OTP
      const response = await axios.post('http://10.0.2.2:8080/api/otp/verify', {
        email,   // Send email along with OTP
        otp: enteredOtp,  // Send OTP
      });

      // Backend response handling
      if (
        // response.data === 'OTP Verified Successfully'
        response.status === 200
      ) {
        Alert.alert('Success', 'OTP Verified Successfully');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', response.err);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to verify OTP. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            autoFocus={index === 0} // Auto-focus on the first input field
          />
        ))}
      </View>

      <Button title="Verify OTP" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
  },
});

export default OTPScreen;