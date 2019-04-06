import React from 'React';
import { View, Text, FlatList } from 'react-native';
import Loader from '@atoms/loader';
import styles from './styles';

_keyExtractor = (item, index) => index + '';

_renderItemSeparator = () => <View style={styles.dividerStyle} />;

_emptyComponent = emptyMsg => (
  <View style={styles.emptyView}>
    <Text style={styles.emptyText}>
      {emptyMsg ? emptyMsg : 'Data is empty'}
    </Text>
  </View>
);

const ListView = props => {
  if (props.isLoading) {
    return <Loader fullView={props.fullLoaderView} />;
  }
  return (
    <FlatList
      style={[styles.flatList, props.style]}
      keyExtractor={_keyExtractor}
      data={props.data}
      ItemSeparatorComponent={props.separator && _renderItemSeparator}
      ListEmptyComponent={() => _emptyComponent(props.emptyMsg)}
      {...props}
    />
  );
};

export default ListView;
