import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "orange", // Ana sayfanın arka plan rengi beyaz
  },
  card: {
    flexDirection: "row", // Yatay hizalama
    backgroundColor: "white", // Dış konteynerin arka plan rengi turuncu
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    elevation: 2,
    alignItems: "center", // Kart içindeki öğeleri dikey olarak ortalamak için
  },
  innerCard: {
    flex: 1, // İçeriğin genişliği
    backgroundColor: "#fff", // İçerik arka plan rengi beyaz
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderTopLeftRadius:40,
    borderBottomLeftRadius:40
     // Görselin sağ tarafına boşluk ekle
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", // Başlık rengi siyah
  },
});
