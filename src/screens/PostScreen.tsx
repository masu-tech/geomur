import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNav } from '@/hooks/useNav';
import { Ionicons } from '@expo/vector-icons';
import { ModalCloseButton } from '@/components/ModalCloseButton';
import { validateStringLength } from '@/utils/TextUtils';

const PostScreen = () => {
  const MAX_MESSAGE_CHAR_NUM = 140;
  const MAX_TAG_NUM = 5;
  const MAX_TAG_CHAR_NUM = 50;

  const navigation = useNav();

  const tagInputRef = useRef<TextInput>(null);

  const [message, setMessage] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>('');

  const handleMessageChange = (text: string) => {
    setMessage(text);
  };

  const handleTagInputChange = (text: string) => {
    setTagInput(text);
  };

  const handleAddTag = () => {
    if (tagInput.trim() === '') {
      // タグ入力欄が空白の場合、なにもしない
      return;
    }

    // 同じタグがすでに追加されている場合、入力欄をクリアして処理を終了する
    if (tags.includes(tagInput.trim())) {
      setTagInput('');
      return;
    }

    // タグを追加し、入力欄をクリアする
    setTags([...tags, tagInput.trim()]);
    setTagInput('');
  };

  const handleRemoveTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleLeavePress = () => {
    // TODO: 投稿処理をここに記述する
    console.log('Message:', message);
    console.log('Tags:', tags);
    // 投稿が完了した後に、テキストエリアとタグをクリアする
    setMessage('');
    setTagInput('');
    setTags([]);
    // 投稿モーダルを閉じる
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={handleLeavePress}
          disabled={!validateStringLength(message, MAX_MESSAGE_CHAR_NUM)}
          style={[
            styles.button,
            { opacity: !validateStringLength(message, MAX_MESSAGE_CHAR_NUM) ? 0.4 : 1 },
          ]}
        >
          <Text style={styles.buttonText}>投稿</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => <ModalCloseButton />,
    });
  }, [navigation, message, tags]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="What's happening?"
        value={message}
        onChangeText={handleMessageChange}
      />
      <View style={styles.tagsContainer}>
        {tags.length < MAX_TAG_NUM && (
          <TextInput
            ref={tagInputRef}
            style={styles.tagInput}
            placeholder="タグを追加（5個まで）"
            value={tagInput}
            maxLength={MAX_TAG_CHAR_NUM}
            onChangeText={handleTagInputChange}
            onSubmitEditing={handleAddTag}
          />
        )}
        <View style={styles.tagList}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <TouchableOpacity onPress={() => handleRemoveTag(index)}>
                <Ionicons name="close" size={18} color={'#fff'} />
              </TouchableOpacity>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    height: 120,
  },
  button: {
    backgroundColor: '#38beff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 4,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tagsContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tagList: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#38beff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    color: '#fff',
  },
  tagInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
});

export default PostScreen;
