import React from 'react'; import { Dimensions,
  View,
  StyleSheet }
  from 'react-native';
  import EventCalendar from 'react-native-events-calendar'; let { width } = Dimensions.get('window');
  export default class App extends React.Component { constructor(props) {
  super(props); this.state = {
  events:
  {
  start: '2020-01-01 00:00:00',
  end: '2020-01-01 02:00:00',
  title: 'New Year Celebration Party', summary: 'Hotel Radision',
  },{
  start: '2020-01-01 01:00:00',
  end: '2020-01-01 02:00:00',
  title: 'New Year Wishes', summary: 'Call & Text Everyone',
  },
  {
  start: '2020-01-02 00:30:00',
  end: '2020-01-02 01:30:00',
  title: 'Rahul Birthday Party', summary: 'Call him',
  },
  {
  start: '2020-01-03 01:30:00',
  end: '2020-01-03 02:20:00',
  title: 'My Birthday Party', summary: 'Lets Have Fun',
  },
  {
  start: '2020-02-04 04:10:00',
  end: '2020-02-04 04:40:00',
  title: 'Auto Expo 2020',
  summary: 'Expoo Venue to be decided',
  },
  ],
  };
  }
  eventClicked(event) { alert(JSON.stringify(event));
  }
  render() { return (
  <View style={styles.container}>
  <EventCalendar eventTapped={this.eventClicked.bind(this)} events={this.state.events}
  width={width} size={60}
  initDate={'2020-01-01'} scrollToFirst
  />
  </View>
  );
  }
  }
  const styles = StyleSheet.create({ container: {
  flex: 1,
  backgroundColor: '#ffb3bb', marginTop: 100,
  },
  });