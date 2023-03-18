import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image,
  } from "@react-pdf/renderer";
import { useEffect } from "react";
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
      marginTop: 60,
      fontSize: 12,
    },
    section: {
      margin: 5,
      padding: 2,
      paddingLeft: 60,
    },
    image: {
        width: 500,
        height: 500,
      },
    viewer: {
      width: window.innerWidth, 
      height: window.innerHeight,
    },
  });
  
  // Create Document Component
  function Sample() {
    const[content,setContent] = useState();
    useEffect(() => {
      setContent(sessionStorage.getItem("Summary"));
      console.log(sessionStorage.getItem("Summary"));
      }, []);
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            {/* <View style={styles.section}>
              <Text>Hello</Text>
            </View>



            <View style={styles.section}>
              <Text>World</Text>
            </View>
            <View style={styles.section}>
              <Text>This is Rahul</Text>
            </View>
            <View style={styles.section}>
            </View>
            <View style={styles.section}>
              <Text>I'm here to do nthg</Text> 
            </View>*/}
            <View style={styles.section}>
              <Text>{content}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default Sample;