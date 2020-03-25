import React from 'react'
import { Text, Keyboard } from 'react-native'
import Container from './containerComponent'
import Input from './inputComponent'
import { Search, Close } from './icons'
import Button from './button'
import theme from '../utils/theme'

function SearchBox({onChangeFocus}) {
  const [isFocus, setFocus] = React.useState(false)
  const [searchText, setSearchText] = React.useState('')

  React.useEffect(()=>{
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide)

    return function(){
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide)
    }
  })

  const _keyboardDidShow =()=> { 
    onChangeFocus(true)
  }

  const _keyboardDidHide = () => {
    onChangeFocus(false)
  }

  const setFocusTextBox = (e) => {
    setFocus(e)
    if (e == false) {
      Keyboard.dismiss()
    }
  }

  const clearSearchArea =()=>{
    setSearchText('');
  }

  const onFocusInput = () => {

  }

  return (
    <Container alignItems="center" flexDirection="row">
      <Container position="relative" flex={1} justifyContent="center">
        <Button
          zIndex={1}
          position="absolute"
          left={16}
          onPress={() => onFocusInput()}>
          <Search color={theme.colors.textMedium} />
        </Button>
        {isFocus && searchText.length > 0 && (
          <Container zIndex={1} position="absolute" right={16}>
            <Button onPress={() => clearSearchArea()}>
              <Close color={theme.colors.textMedium} />
            </Button>
          </Container>
        )}
        <Input
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : '#D1D1D1'}
          color={theme.colors.textDark}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor={theme.colors.textMedium}
          height={52}
          bg="white"
          paddingLeft={52}
          borderRadius="normal"
          value={searchText}
          onFocus={() => setFocusTextBox(true)}
          onChangeText={text => setSearchText(text)}></Input>
      </Container>
      {isFocus && (
        <Button
          borderRadius={theme.radii.normal}
          backgroundColor="gray"
          marginLeft={5}
          paddingRight={15}
          paddingLeft={15}
          height={52}
          alignItems="center"
          onPress={() => setFocusTextBox(false)}>
          <Text style={{ color: 'white' }}>Vazgeç</Text>
        </Button>
      )}
    </Container>
  )
}

export default SearchBox