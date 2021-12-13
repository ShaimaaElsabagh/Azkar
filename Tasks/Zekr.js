
import * as React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    TextInput,
    ScrollView,
    AsyncStorage,
    ToastAndroid
} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import { Colors } from './Constants';
import { Style } from './Constants'
import { AzkarStyle } from './Constants'
var { width, height } = Dimensions.get('window');
export default class Zekr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    item: "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\n اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255].",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم\n قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم \n قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم\nقُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: " أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر. ",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ . ",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك. ",
                    num: 4,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر. ",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم. ",
                    num: 7,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور. ",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ. ",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي. ",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "أَصْبَـحْـنا وَأَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ ، وَنَصْـرَهُ ، وَنـورَهُ وَبَـرَكَتَـهُ ، وَهُـداهُ ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه. ",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم. ",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ",
                    num: 10,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ. ",
                    num: 3,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا. ",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ. ",
                    num: 1,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ. ",
                    num: 100,
                    view: true,
                    favfavo: false,
                    color: Colors.secColor
                },
                {
                    item: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ",
                    num: 100,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },
                {
                    item: "أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ ",
                    num: 100,
                    view: true,
                    favo: false,
                    color: Colors.secColor
                },

            ],

            counter: 0,
            all_counter: 0,
            new_zekr: "",
            num_zekr: 0,
            alertView: false,
            counter_passed: 0,
            record: [],
            fav: [],
            fav_item: "",


        }
    }












    async componentDidMount() {
        this.getZekr();
        this.get_record();
        this.get_fav()

    }




    //////async zekr//////////

    async store(arr, all_counter) {
        await AsyncStorage.setItem("zekr", JSON.stringify(arr))
        await AsyncStorage.setItem('all_counter', JSON.stringify(all_counter))

    }

    async getZekr() {
        let arr = await AsyncStorage.getItem("zekr")
        arr = JSON.parse(arr)
        let all_counter = JSON.parse(await AsyncStorage.getItem('all_counter'))

        if (arr == null && all_counter == null) {
            arr = this.state.list
            all_counter = this.state.all_counter * 1
        }
        else {
            arr = arr
        }
       
        this.setState({ list: arr, all_counter })

    }








    //////async record/////////

    async save_counter(record) {

        await AsyncStorage.setItem('record', JSON.stringify(record))

    }
    async get_record() {
        let record = JSON.parse(await AsyncStorage.getItem('record'))
        if (record == null) {
            record = this.state.record
        } else {
            record = record
        }
        this.setState({
            record
        })
    }



    //////functions/////


    add_new_do3a2() {

        let list = this.state.list;

        if (this.state.new_zekr != "") {
            let newObj = {
                item: this.state.new_zekr,
                num: this.state.num_zekr,
                view: true,
                favo: false,
                color: Colors.secColor

            }
            list.unshift(newObj)
        } else {
            null
        }


        this.setState({
            list,
            new_zekr: "",
            alertView: false,
            num_zekr: 0
        })

        this.store(list)

    }







    remove(index) {

        let list = this.state.list;
        list.splice(index, 1);
        this.setState({ list: list })
        this.store(list)

    }






    hideItems(item_count, index) {
        let list = this.state.list
        let counter = this.state.counter
        counter++
        let all_counter = this.state.all_counter
        all_counter++
        if (counter == item_count) {
            list[index].view = false
            counter = 0
        }
        let counter_passed = this.state.counter_passed
        counter_passed++
        this.setState({
            counter,
            list,
            counter_passed,
            all_counter

        })
        this.store(list, all_counter)
    }







    reload() {
        let list = this.state.list
        let all_counter = this.state.all_counter
        all_counter = 0
        for (let i = 0; i < list.length; i++) {
            list[i].view = true
        }
        this.store(list, all_counter)
        let counter_passed = this.state.counter_passed


        let record = this.state.record
        let d = new Date()
        let date = d.getDate() + "/" + (1 + d.getMonth()) + "/" + d.getFullYear()
        let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()

        if (counter_passed != 0) {


            let new_item = {
                number: counter_passed,
                date: date,
                time: time,
            }
            record.unshift(new_item)
        }

        this.save_counter(record)

        this.setState({
            list,
            counter_passed,
            all_counter,
            record,
            color: Colors.secColor
        })
    }



    Fav(index) {
        let list = this.state.list;
        let Favorit = this.state.Favorit;
        if (list[index].favo == false) {
            list[index].favo = true;
            list[index].color = Colors.FavColor
    
            setTimeout(() => {
                ToastAndroid.showWithGravity(
                    'تمت الاضافة الى المفضلة',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                );
            }, 250);
        } else {
            list[index].favo = false;
            list[index].color = Colors.secColor
           
            setTimeout(() => {
                ToastAndroid.showWithGravity(
                    'تم المسح من المفضلة',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                );
            }, 250);
        }
        this.setState({ list });
        this.store(this.state.list);
    }


    render() {

        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.mainColor} />
                <View style={{
                    alignItems: "center",
                    width: '100%',
                    height: 60,
                    backgroundColor: Colors.mainColor,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    flexDirection: "row",

                }}
                >
                    <TouchableOpacity style={AzkarStyle.HeaderIcon}

                        onPress={
                            () => {
                                this.setState({
                                    alertView: true
                                })
                            }
                        }

                    >


                        <Icon name="plus" size={20} color={Colors.secColor} />
                    </TouchableOpacity>


                    <View style={{
                        flex: 0.50,
                        alignItems: "center"

                    }}>

                        <Text style={Style.HeaderText}>الاذكار</Text>
                    </View>

                    <TouchableOpacity style={AzkarStyle.HeaderIcon}
                        onPress={
                            () => { this.reload() }}>
                        <Icon name="redo-alt" size={20} color={Colors.secColor} />
                    </TouchableOpacity>



                </View>


                <ScrollView style={{
                    backgroundColor: Colors.secColor,
                    flex: 1
                }}>


                    <View style={{
                        alignItems: "center"
                    }}>


                        {
                            this.state.list.map((list, index) => (
                                <>


                                    {
                                        list.view ? (
                                            <>

                                                <TouchableOpacity style={AzkarStyle.TouchableStyle}
                                                    key={index}
                                                    onPress={() => {
                                                        this.hideItems(list.num, index)
                                                    }}
                                                    activeOpacity={0.6}
                                                >


                                                    <Text style={AzkarStyle.TextStyle}>
                                                        {list.item}
                                                    </Text>

                                                </TouchableOpacity>

                                                <View style={{
                                                    flexDirection: "row",
                                                    justifyContent: "space-around",
                                                    width: '90%'
                                                }}>
                                                    <View style={AzkarStyle.SmallTouchable}
                                                    >

                                                        <TouchableOpacity
                                                            activeOpacity={0.2}
                                                            onPress={() => {
                                                                this.hideItems(list.num, index)
                                                            }}

                                                            style={[AzkarStyle.IntoSmallTouchable, { justifyContent: "center" }]}

                                                        >

                                                            <Text style={{
                                                                color: Colors.secColor,
                                                                fontSize: 18
                                                            }}>التكرار  ( {list.num} )</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                    <View style={AzkarStyle.SmallTouchable}
                                                    >
                                                        <TouchableOpacity style={[AzkarStyle.IntoSmallTouchable, { flexDirection: 'row', justifyContent: 'space-around', }]}
                                                            onPress={
                                                                () => {
                                                                    this.Fav(index)
                                                                }
                                                            }

                                                        >


                                                            <View style={{
                                                                width: '50%',
                                                                justifyContent: "center",
                                                                alignItems: "flex-end",
                                                            }}>

                                                                <Text style={{
                                                                    color: Colors.secColor,
                                                                    fontSize: 18,
                                                                }}>مفضلة</Text>
                                                            </View>

                                                            <View style={{
                                                                alignItems: "flex-start",
                                                                width: '40%',
                                                                justifyContent: "center"
                                                            }}>
                                                                <Icon2 name="heart" color={list.color} size={16} />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </>
                                        ) : null
                                    }


                                </>
                            ))
                        }


                    </View>
                </ScrollView>

                {
                    this.state.alertView ? (
                        <>

                            <View style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: "rgba(0,0,0,0.5)",
                                position: 'absolute',
                            }}>

                                <View style={{
                                    width: width,
                                    height: height
                                }}>
                                    <Animatable.View
                                        animation="fadeIn"
                                        style={{
                                            width: '70%',
                                            height: '30%',
                                            backgroundColor: Colors.secColor,
                                            alignSelf: 'center',
                                            marginTop: "55%",
                                            borderRadius: 20,

                                        }}>
                                        <Text
                                            style={{
                                                color: "#211E1E",
                                                textAlign: "center",
                                                marginTop: width * 0.03,
                                                fontSize: 18,
                                                fontWeight: "bold"
                                            }}>
                                            اضافة ذكر
                                        </Text>



                                        <TextInput
                                            value={this.state.new_zekr}
                                            onChangeText={(value) => {
                                                this.setState({ new_zekr: value })
                                            }}
                                            placeholder="اكتب الذكر.."
                                            placeholderTextColor="#999"
                                            multiline
                                            style={AzkarStyle.TextinputStyle}

                                        />



                                        <TextInput

                                            value={this.state.num_zekr}
                                            onChangeText={(value) => {
                                                this.setState({ num_zekr: value })
                                            }}
                                            placeholder="عدد مرات الذكر.."
                                            placeholderTextColor="#999"
                                            multiline
                                            style={AzkarStyle.TextinputStyle}
                                        />

                                        <View style={{
                                          
                                            width: '90%',
                                            height: width * 0.15,
                                            alignSelf: 'center',
                                            marginTop: 18,
                                            flexDirection: 'row',
                                            justifyContent: "space-around"
                                        }}>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.setState({ alertView: false })
                                                }}
                                                style={AzkarStyle.AlertTouchable}
                                            >
                                                <Text style={{
                                                    color: Colors.secColor,
                                                    fontSize: 17,
                                                    textAlign: "center",
                                                    fontWeight: "normal"
                                                }}>الغاء
                                                </Text>
                                            </TouchableOpacity>


                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.add_new_do3a2()
                                                }}
                                                style={AzkarStyle.AlertTouchable}
                                            >
                                                <Text style={{
                                                    color: Colors.secColor,
                                                    fontSize: 17,
                                                    textAlign: "center",
                                                    fontWeight: "normal"
                                                }}>حفظ
                                                </Text>
                                            </TouchableOpacity>

                                        </View>

                                    </Animatable.View>
                                </View>
                            </View>

                        </>
                    ) : null
                }
            </>

        )
    }
}

