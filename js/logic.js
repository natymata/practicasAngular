angular.module('myApp', [])
.controller('myCtrl', ['$scope', function ($scope) {
		$scope.nombre="Naty";
		$scope.nuevoComentario={};
		$scope.comentarios=[
			{
				id: 1,
				comentario: "Primer comentario",
				username: "naty"
			},
			{
				id: 2,
				comentario: "Segundo comentario",
				username: "juanita"
			},
			{
				id:3,
				comentario: "tercer comentario",
				username: "user3"
			}
		];

		$scope.route=2;
		$scope.id=4;

		$scope.agregarComentario= function () {
			$scope.nuevoComentario.id= $scope.id;
			$scope.comentarios.push($scope.nuevoComentario);
			$scope.id++;
			$scope.nuevoComentario={};
		}
	}])
angular.module("myApp")
	.controller("toDoCtrl", ["$scope", function ($scope) {
		//from hace un parseo de datos json.
		$scope.toDos= angular.fromJson(localStorage.getItem("toDos")) || [];
			/*
			toDo= {
				id:0,
				actividad: una actividad,
				descripcion: descripcion de la act,
				fecha: 9/2/2016,
				estado: concluido/ pendiente,
				done: true/ false
			}
			*/
		$scope.nuevaAct={};
		$scope.id= localStorage.getItem("idSetterToDo") || 1;
		$scope.json={};

		$scope.agregarAct= function (){
			$scope.nuevaAct.id= $scope.id;
			$scope.nuevaAct.done=false;
			$scope.nuevaAct.estado= "Pendiente";
			$scope.toDos.push($scope.nuevaAct);
			$scope.id++;
			$scope.nuevaAct={};
			$scope.saveData();
			$scope.saveId();
		};

		$scope.saveData= function() {
			localStorage.setItem("toDos", angular.toJson($scope.toDos));
		};

		$scope.saveId= function(){
			localStorage.setItem("idSetterToDo", $scope.id);
		};

		$scope.clearDone= function () {
			$scope.toDos= $scope.toDos.filter(function (toDo) {
				return !toDo.done;
			});
			$scope.saveData();
		};

		$scope.clearAll= function () {
			$scope.toDos=[];
			$scope.saveData();
			$scope.id=1;
			$scope.saveId();
		};

		$scope.actualEstado= function (toDo) {
				if(toDo.estado=="Pendiente"){
					toDo.estado= "Completo";
				}else{
					toDo.estado="Pendiente";
				}
			$scope.saveData();
		};

	}]);

