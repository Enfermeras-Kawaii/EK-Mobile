import React, { useState } from "react";
import {
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import styles from "./styles";

function RegisterCalendar({ onDateChange }) {
  const [open, setOpen] = useState(false);
  const today = new Date();

  const startdate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY-MM-DD"
  );

  const [date, setDate] = useState(startdate);
  const handleDateChange = (date) => {
    setDate(date);
    onDateChange(date);
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.button}>
        <Text>{date}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              onDateChange={handleDateChange}
              maximumDate={startdate}
              selected={date}
            />
            <TouchableOpacity onPress={() => setOpen(!open)}>
              <Text>Cerrar Calendario</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default RegisterCalendar;
