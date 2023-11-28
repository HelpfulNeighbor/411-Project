import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const ActivityIndicatorComp = () => (
  <ActivityIndicator animating={true} color={MD2Colors.purple500} size={'large'} />
);

export default ActivityIndicatorComp;