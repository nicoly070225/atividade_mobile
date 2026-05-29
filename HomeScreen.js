import { useState, useEffect } from 'react';

const [busca, setBusca] = useState('');
const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

useEffect(() => {
  const filtrados = jogos.filter((jogo) =>
    jogo.titulo.toLowerCase().includes(busca.toLowerCase())
 )
});

<TextInput
  value={busca}
  onChangeText={setBusca}
  placeholder="Buscar jogo..."
/>
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const jogos = [
  {
    id: '1',
    titulo: 'The Legend of Zelda: Breath of the Wild',
    genero: 'Aventura / Mundo Aberto',
    plataforma: 'Nintendo Switch',
    nota: '10/10',
    sinopse:
      'Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.',
  },
  {
    id: '2',
    titulo: 'Red Dead Redemption 2',
    genero: 'Acao / Mundo Aberto',
    plataforma: 'PS4 / Xbox / PC',
    nota: '10/10',
    sinopse:
      'Uma epica historia sobre a vida fora da lei no coracao da America. Viva a aventura de Arthur Morgan no velho oeste em um mundo detalhado e imersivo.',
  },
  {
    id: '3',
    titulo: 'God of War',
    genero: 'Acao / Aventura',
    plataforma: 'PS4 / PC',
    nota: '10/10',
    sinopse:
      'Kratos e seu filho Atreus embarcam em uma jornada pelos Nove Reinos da mitologia nordica. Um dos jogos mais premiados de sua geracao.',
  },
  {
    id: '4',
    titulo: 'Hollow Knight',
    genero: 'Metroidvania / Plataforma',
    plataforma: 'PC / Switch / PS4',
    nota: '9/10',
    sinopse:
      'Explore um vasto reino subterraneo habitado por insetos. Um desafio preciso e belo, com um mundo imenso para descobrir.',
  },
  {
    id: '5',
    titulo: 'Celeste',
    genero: 'Plataforma / Indie',
    plataforma: 'PC / Switch / PS4',
    nota: '9/10',
    sinopse:
      'Ajude Madeline a sobreviver sua viagem interior pela montanha Celeste. Um platformer desafiador com uma historia tocante sobre superacao.',
  },
  {
    id: '6',
    titulo: 'Stardew Valley',
    genero: 'Simulacao / RPG',
    plataforma: 'PC / Switch / Mobile',
    nota: '9/10',
    sinopse:
      'Herde a fazenda do seu avo e comece uma nova vida. Plante, colete, construa relacionamentos e explore cavernas neste mundo relaxante.',
  },
];


export default function HomeScreen() {
  const [busca, setBusca] = useState('');

  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  useEffect(() => {
  const resultado = jogos.filter((jogo) =>
   jogo.titulo.toLowerCase().includes(busca.toLowerCase())
   );
   setJogosFiltrados(resultado);
   }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detalhe', { ...item })}
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>{item.melhoresjogos[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.melhoresjogos}</Text>
          <Text style={styles.cardSubtitulo}>{item.jogos}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.headerTitulo}>melhoresjogos</Text>
        <Text style={styles.headerSubtitulo}>
          Os melhores jogos aqui, para você
        </Text>
      </View>

    
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      
      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  buscaContainer: {
    backgroundColor: '#f34e4e',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b56666',
  },
  buscaInput: {
    backgroundColor: '#e2b2b2',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#1A1A1A',
  },
  container: {
    flex: 1,
    backgroundColor: '#ff0909',
  },
  header: {
    backgroundColor: '#333333',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitulo: {
    fontSize: 13,
    color: '#CCCCCC',
    marginTop: 4,
  },
  lista: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardIconeTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555555',
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: '#888888',
  },
});
