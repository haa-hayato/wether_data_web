//import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Button } from '@mui/material';
import React from "react";
import { useNavigate } from "react-router-dom"


var place;
var uppermonth;
var upperdate;
var buttommonth;
var buttomdate;


export function CustomizedSelects() { //placeセット用
  const handleChange0 = (event, value) => {
    place = value.label;
  };

  const [upperMonth, setMonth] = React.useState(''); //upperMonthセット用
  const handleChange = (event, value) => {
    setMonth(event.target.value); 
    uppermonth = value.props.value;
  };

  const [upperDate, setDate] = React.useState(''); //upperDateセット用
  const handleChange2 = (event, value) => {
    setDate(event.target.value);
    upperdate = value.props.value;
  };

  const [buttomMonth, setMonth2] = React.useState(''); //buttomMonthセット用
  const handleChange3 = (event, value) => {
    setMonth2(event.target.value);
    buttommonth = value.props.value;
  };

  const [buttomDate, setDate2] = React.useState(''); //buttomDateセット用
  const handleChange4 = (event, value) => {
    setDate2(event.target.value);
    buttomdate = value.props.value;
  };

  const navigate = useNavigate()
  
  return (
    <div>
      <FormControl sx={{ m: 1}} variant="standard">
        <Autocomplete
          disablePortal
          id="place"
          options={prefectures}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="場所" />}
          onChange={handleChange0}
        />
      </FormControl>

      

      <FormControl sx={{ m: 1, minWidth: 80 }} >
        <InputLabel id="demo-simple-select-label">何月</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="upper-month"
          value={upperMonth}
          label="UpperMonth"
          onChange={handleChange}
        >
          <MenuItem value={1}>1月</MenuItem>
          <MenuItem value={2}>2月</MenuItem>
          <MenuItem value={3}>3月</MenuItem>
          <MenuItem value={4}>4月</MenuItem>
          <MenuItem value={5}>5月</MenuItem>
          <MenuItem value={6}>6月</MenuItem>
          <MenuItem value={7}>7月</MenuItem>
          <MenuItem value={8}>8月</MenuItem>
          <MenuItem value={9}>9月</MenuItem>
          <MenuItem value={10}>10月</MenuItem>
          <MenuItem value={11}>11月</MenuItem>
          <MenuItem value={12}>12月</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 80 }} >
        <InputLabel id="demo-simple-select-label">何日</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="upper-date"
          value={upperDate}
          label="UpperDate"
          onChange={handleChange2}
        >
          <MenuItem value={1}>1日</MenuItem>
          <MenuItem value={2}>2日</MenuItem>
          <MenuItem value={3}>3日</MenuItem>
          <MenuItem value={4}>4日</MenuItem>
          <MenuItem value={5}>5日</MenuItem>
          <MenuItem value={6}>6日</MenuItem>
          <MenuItem value={7}>7日</MenuItem>
          <MenuItem value={8}>8日</MenuItem>
          <MenuItem value={9}>9日</MenuItem>
          <MenuItem value={10}>10日</MenuItem>
          <MenuItem value={11}>11日</MenuItem>
          <MenuItem value={12}>12日</MenuItem>
          <MenuItem value={13}>13日</MenuItem>
          <MenuItem value={14}>14日</MenuItem>
          <MenuItem value={15}>15日</MenuItem>
          <MenuItem value={16}>16日</MenuItem>
          <MenuItem value={17}>17日</MenuItem>
          <MenuItem value={18}>18日</MenuItem>
          <MenuItem value={19}>19日</MenuItem>
          <MenuItem value={20}>20日</MenuItem>
          <MenuItem value={21}>21日</MenuItem>
          <MenuItem value={22}>22日</MenuItem>
          <MenuItem value={23}>23日</MenuItem>
          <MenuItem value={24}>24日</MenuItem>
          <MenuItem value={25}>25日</MenuItem>
          <MenuItem value={26}>26日</MenuItem>
          <MenuItem value={27}>27日</MenuItem>
          <MenuItem value={28}>28日</MenuItem>
          <MenuItem value={29}>29日</MenuItem>
          <MenuItem value={30}>30日</MenuItem>
          <MenuItem value={31}>31日</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{m: 1}}>
        <Box pt={2}>
          <div>から</div>
        </Box>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 80 }} >
        <InputLabel id="demo-simple-select-label">何月</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="buttom-month"
          value={buttomMonth}
          label="ButtomMonth"
          onChange={handleChange3}
        >
          <MenuItem value={1}>1月</MenuItem>
          <MenuItem value={2}>2月</MenuItem>
          <MenuItem value={3}>3月</MenuItem>
          <MenuItem value={4}>4月</MenuItem>
          <MenuItem value={5}>5月</MenuItem>
          <MenuItem value={6}>6月</MenuItem>
          <MenuItem value={7}>7月</MenuItem>
          <MenuItem value={8}>8月</MenuItem>
          <MenuItem value={9}>9月</MenuItem>
          <MenuItem value={10}>10月</MenuItem>
          <MenuItem value={11}>11月</MenuItem>
          <MenuItem value={12}>12月</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 80 }} >
        <InputLabel id="demo-simple-select-label">何日</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="buttom-date"
          value={buttomDate}
          label="ButtomDate"
          onChange={handleChange4}
        >
          <MenuItem value={1}>1日</MenuItem>
          <MenuItem value={2}>2日</MenuItem>
          <MenuItem value={3}>3日</MenuItem>
          <MenuItem value={4}>4日</MenuItem>
          <MenuItem value={5}>5日</MenuItem>
          <MenuItem value={6}>6日</MenuItem>
          <MenuItem value={7}>7日</MenuItem>
          <MenuItem value={8}>8日</MenuItem>
          <MenuItem value={9}>9日</MenuItem>
          <MenuItem value={10}>10日</MenuItem>
          <MenuItem value={11}>11日</MenuItem>
          <MenuItem value={12}>12日</MenuItem>
          <MenuItem value={13}>13日</MenuItem>
          <MenuItem value={14}>14日</MenuItem>
          <MenuItem value={15}>15日</MenuItem>
          <MenuItem value={16}>16日</MenuItem>
          <MenuItem value={17}>17日</MenuItem>
          <MenuItem value={18}>18日</MenuItem>
          <MenuItem value={19}>19日</MenuItem>
          <MenuItem value={20}>20日</MenuItem>
          <MenuItem value={21}>21日</MenuItem>
          <MenuItem value={22}>22日</MenuItem>
          <MenuItem value={23}>23日</MenuItem>
          <MenuItem value={24}>24日</MenuItem>
          <MenuItem value={25}>25日</MenuItem>
          <MenuItem value={26}>26日</MenuItem>
          <MenuItem value={27}>27日</MenuItem>
          <MenuItem value={28}>28日</MenuItem>
          <MenuItem value={29}>29日</MenuItem>
          <MenuItem value={30}>30日</MenuItem>
          <MenuItem value={31}>31日</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{m: 1}}>
        <Box pt={2}>
          <div>まで</div>
        </Box>
      </FormControl>

      <FormControl sx={{m: 2}}>
        <Button 
          variant="outlined" 
          onClick={() => {CreateData(); navigate('/componenta'); }}>
          決定
        </Button>
      </FormControl>

      
    </div>
  );
}


export function CreateData() {  
  //placeに場所
  //uppermonthに開始月
  //upperdateに開始日
  //buttommonthに終了月
  //buttomdate終了日が代入されている
  
  async function f(place, um, ud, bm, bd) { 
    var allData = await axios.get('http://localhost:8000/wetherdata/wether_data/')
    .then(response => response.data)
    //console.log(allData[0].prefecture)


    if (um < 10){ //それぞれ一桁の月、日の前に0を入れる
      um = "0" + um
    }

    if (ud < 10){
      ud = "0" + ud
    }

    if (bm < 10){
      bm = "0" + bm
    }

    if (bd < 10){
      bd = "0" + bd
    }


    const currentTime = new Date(); //現在時刻を取得


    function setPastYear(month, date, n) { //現在年-n年-month-dateを返す
      const result = currentTime.getFullYear() - n + "-" + month + "-" + date;
      return result
    }
    

    var placedData = []; //指定された県のデータ(日付昇順)
    var finalData = []; //最終的に使うデータ
    

    allData.forEach(function(element){ //placedDataの作成
      if (element.prefecture == place){
        placedData.push(element)
      }
    })
    

    placedData = placedData.sort(function(a, b){ //placedDataを日付昇順に加工
      return (a.date < b.date) ? -1 : 1;;
    })


    placedData.forEach(function(element){ //finalDataの作成(入力された日付の過去三年間のデータ取得)
      for (var i = 0; i < 3; i++) {
        const firstDate = setPastYear(um, ud, 3-i)
        const finalDate = setPastYear(bm, bd, 3-i)
        if (element.date >= firstDate && element.date <= finalDate){
          finalData.push(element)
        }     
      }      
    })

    console.log(finalData)

    function setData(date, maxtemp, mintemp, precipitation, snowfall, summary) {
      return { date, maxtemp, mintemp, precipitation, snowfall, summary };
    }
  
    var rows = [];
    finalData.forEach(function(element){
      rows.push(setData(element.date, element.maxtemp, element.mintemp, element.precipitation, element.snowfall, element.summary))
    })
    
    console.log(rows)

    return rows
  }
    
  var x = f(place, uppermonth, upperdate, buttommonth, buttomdate)
  console.log(x);
  return x
  
  

  
    
    
  
  }










const prefectures = [
  { label: '札幌'},
  { label: '仙台'},
  { label: '金沢'},
  { label: '東京'},
  { label: '横浜'},
  { label: '名古屋'},
  { label: '京都'},
  { label: '大阪'},
  { label: '高松'},
  { label: '広島'},
  { label: '長崎'},
  { label: '那覇'},  
];