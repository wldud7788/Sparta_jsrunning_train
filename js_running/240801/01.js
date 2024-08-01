1. 
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    Info() {
      console.log(`${this.name} ${this.age}`);
    }
  }
  
  const person = new Person("이지영", "15");
  
  person.Info();
  

2. 
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    Info() {
      console.log(`${this.name} ${this.age}`);
    }
  }
  
  // const person = new Person("이지영", "15");
  const jung = new Person("yuno", "20");
  
  jung.Info();

3. Person을 이용해서 Stuent 클래스를 정의해주세요. 
Student클래스는 추가적으로 Study라는 속성를 갖습니다

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    Info() {
      console.log(`${this.name} ${this.age}`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, study) {
      super(name, age);
      this.study = study;
    }
  }



4. student1이라는 인스턴스를 생성하고, 이름은 "준현" 나이는 12000 , 
study는 javascript로 생성하고 각 요소들을 출력해주세요

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    Info() {
      console.log(`${this.name} ${this.age}`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, study) {
      super(name, age);
      this.study = study;
    }
    Info() {
      console.log(`${this.name} ${this.age} ${this.study}`);
    }
  }
  // const person = new Person("이지영", "15");
  
  const studuent1 = new Student("준현", "12000", "공부");
  
  studuent1.Info();
  

5. 
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    Info() {
      console.log(`${this.name} ${this.age}`);
    }
  }
  
  class Tutee extends Person {
    constructor(name, age, study) {
      super(name, age);
      this.study = study;
    }
    Info() {
      console.log(
        `저의 이름은 ${this.name} 나이는 ${this.age} 현재 ${this.study}를 학습하고 있습니다.`
      );
    }
  }
  // const person = new Person("이지영", "15");
  
  const tutee = new Tutee("준현", "12000", "공부");
  
  tutee.Info();
  

6.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    Info() {
      console.log(`${this.name} ${this.age}`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, study) {
      super(name, age);
      this.study = study;
    }
    Info() {
      console.log(`${this.name} ${this.age} ${this.study}`);
    }
  }
  
  class Tutee extends Person {
    constructor(name, age, study) {
      super(name, age); 
      this.study = study;
    }
    Info() {
      console.log(
        `저의 이름은 ${this.name} 나이는 ${this.age} 현재 ${this.study}를 학습하고 있습니다.`
      );
    }
  }
  // const person = new Person("이지영", "15");
  
  const tutee = new Tutee("준현", "12000", "공부");
  
  console.log(Student.prototype instanceof Person); //false
  console.log(tutee instanceof Student); //false
  