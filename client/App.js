import { StatusBar, View } from 'react-native';
import styles from './styles/appStyles'
import { Post } from './components/Post'

export default function App() {
  return (
    <View style={styles.container}>
      <Post
        title='Тестовый заголовок'
        creationAt='16/11/2022'
        imageUrl='https://habrastorage.org/getpro/habr/upload_files/c3b/2bd/448/c3b2bd448de7d78ac1855cf6102f83de.jpeg'
      />
      <StatusBar theme="auto" />
    </View>
  );
}
