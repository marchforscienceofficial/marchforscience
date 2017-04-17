export function initialize(application) {
  application.inject('controller', 'notifications', 'service:notification-messages-service');
  application.inject('component', 'notifications', 'service:notification-messages-service');
  application.inject('route', 'notifications', 'service:notification-messages-service');
}

export default {
  name: 'notifications',
  initialize
};