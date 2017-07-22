angular.
module('ResumeApp').
component('education', {
    templateUrl: 'app/education/education.template.html',
    controller: function EducationController($scope, educationService, globalService) {

        var self = this;

        self.$onInit = function () {
            self.details = {};
            educationService.getDetails().then(function (snapshot) {
                self.details = snapshot.val();
                $scope.$digest();
                globalService.resizeSidebar();
            });
        };
    }
});