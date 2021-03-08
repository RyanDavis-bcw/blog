(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{484:function(t,e,a){"use strict";a.r(e);var o=a(2),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" SQL")]),t._v(" "),a("h2",{attrs:{id:"what-is-the-difference-between-a-primary-key-and-a-foreign-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-a-primary-key-and-a-foreign-key"}},[t._v("#")]),t._v(" What is the difference between a primary key and a foreign key")]),t._v(" "),a("p",[t._v("A primary key is n identifier on a table that distinguishes it from other tables. A Foreign key is a local key, that identifies and joins on foreign tables.")]),t._v(" "),a("h1",{attrs:{id:"what-is-an-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-alias"}},[t._v("#")]),t._v(" What is an Alias?")]),t._v(" "),a("p",[t._v("An alias is an abstraction or renaming of a variable. It gives reference to an original variable under a different name.")]),t._v(" "),a("h2",{attrs:{id:"demonstrate-how-you-would-query-a-join-statement-that-would-get-all-of-a-doctors-patients-from-the-following-collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demonstrate-how-you-would-query-a-join-statement-that-would-get-all-of-a-doctors-patients-from-the-following-collections"}},[t._v("#")]),t._v(" Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:")]),t._v(" "),a("p",[t._v("CREATE TABLE doctors (\nid INT NOT NULL AUTO_INCREMENT,")]),t._v(" "),a("p",[t._v("PRIMARY KEY (id)")]),t._v(" "),a("p",[t._v(")")]),t._v(" "),a("p",[t._v("CREATE TABLE patients (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),t._v(" "),a("p",[t._v("CREATE TABLE doctorspatients (\nid INT NOT NULL AUTO_INCREMENT,\ndoctorId INT NOT NULL,\npatientId INT NOT NULL,")]),t._v(" "),a("p",[t._v("FOREIGN KEY (doctorId)\nREFERENCES doctors(id),\nFOREIGN KEY (patientId)\nREFERENCES patients(id),\n)")]),t._v(" "),a("p",[t._v("SELECT\npatient."),a("em",[t._v(",\ndoctor.")])]),t._v(" "),a("p",[t._v("FROM patients patient\nJOIN doctors doctor ON doctor.doctorId = doctorId\nWHERE patient.doctorId = doctor.doctorId;")])])}),[],!1,null,null,null);e.default=n.exports}}]);