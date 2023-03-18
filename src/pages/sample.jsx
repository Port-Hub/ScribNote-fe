import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image,
  } from "@react-pdf/renderer";
  // Create styles,
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
      marginTop: 60,
      //backgroundImage: url(sampleImg),
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
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Hello</Text>
              {/* <img src = {imgz}></img> */}
            </View>
            <View style={styles.section}>
              <Text>World</Text>
            </View>
            <View style={styles.section}>
              <Text>This is Rahul</Text>
            </View>
            <View style={styles.section}>
              <Image style={styles.image} src="/border.png">hi</Image> 
            </View>
            <View style={styles.section}>
              <Text>I'm here to do nthg</Text>
              <Image style={styles.image} src="/border.png"/> 
            </View>
            <View style={styles.section}>
              <Text>I've lot of work to do still I like to waste time</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default Sample;