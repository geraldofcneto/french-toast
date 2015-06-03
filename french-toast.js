'use strict';
angular.module('french-toast', [ionic, ngCordova])
	.factory('Toast', function($timeout, $cordovaToast, $q, $ionicLoading) {
		return {
			show: function(message, duration, position) {
				message = message || 'There was a problem...';
				duration = duration || 'short';
				position = position || 'top';

				if (!!window.cordova) {
					return $cordovaToast.show(message, duration, position);
				}

				console.log('Toasting');
				var loading = $ionicLoading.show({
					template: message,
					noBackdrop: true,
					duration: ((duration === 'short') ? 2000 : 5000)
				});

				var deferred = $q.defer();

				$timeout(function() {
					deferred.resolve(loading);
				}, 100);

				return deferred.promise;
			}
		};
	});
