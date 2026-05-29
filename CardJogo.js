import { Text, View } from "react-native";

export default function CardJogo({
  titulo,
  genero,
  plataforma, 
  nota}) {

  return (
    <View style={styles.card}>
      
      <Text style={styles.titulo}>
        {titulo}
      </Text>

      <Text style={styles.info}>
        Gênero: {genero}
      </Text>

      <Text style={styles.info}>
        Plataforma: {plataforma}
      </Text>

      <Text style={styles.nota}>
        Nota: {nota}
      </Text>

    </View>
  );
}


const styles = StyleSheet.create({

  card: {
    backgroundColor: "#e14b4b",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
  },

  titulo: {
    color: "#d83030",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  info: {
    color: "#985959",
    fontSize: 16,
    marginBottom: 5,
  },

  nota: {
    color: "#d25449",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

});
