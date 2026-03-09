import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
type Consulta = {
  id: number;
  paciente: string;
  medico: string;
  data: string;
  status: "agendada" | "confirmada" | "cancelada" | "realizada";
};
export default function App() {
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    paciente: "Carlos Andrade",
    medico: "Dr. Roberto Silva",
    data: "28/02/2026",
    status: "agendada",
  });
  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>
      <View style={styles.card}>
        <Text style={styles.paciente}>Paciente: {consulta.paciente}</Text>
        <Text>Médico: {consulta.medico}</Text>
        <Text>Data: {consulta.data}</Text>
        <Text>Status: {consulta.status}</Text>
      </View>
      {consulta.status === "agendada" && (
        <View style={styles.btnConfirmar}>
          <Button title="Confirmar Consulta" onPress={confirmarConsulta} />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffbb00",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  btnConfirmar: {
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: "80%",
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
});