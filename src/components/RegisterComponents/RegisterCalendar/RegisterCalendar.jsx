import React, { useState } from "react";
import {
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { AntDesign } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import styles from "./styles";

function RegisterCalendar({ control, name, rules }) {
  const [open, setOpen] = useState(false);
  const today = new Date();
  const startdate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "DD-MM-YYYY"
  );

  return (
    <View>
      <Controller
        control={control}
        name={name}
        defaultValue={startdate}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <SafeAreaView>
            <TouchableOpacity
              onPress={() => setOpen(!open)}
              style={styles.button}
            >
              <View style={styles.dateContainer}>
                <Text>{value}</Text>
                <AntDesign
                  name="calendar"
                  style={{ fontSize: 20, color: "#f36cbc", marginLeft: 5 }}
                />
              </View>
            </TouchableOpacity>
            <Modal animationType="slide" transparent={true} visible={open}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <DatePicker
                    mode="calendar"
                    onDateChange={(date) => {
                      onChange(date);
                      setOpen(false);
                    }}
                    maximumDate={startdate}
                    selected={value}
                  />
                  <TouchableOpacity onPress={() => setOpen(!open)}>
                    <Text>Cerrar Calendario</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </SafeAreaView>
        )}
      />
    </View>
  );
}

export default RegisterCalendar;
