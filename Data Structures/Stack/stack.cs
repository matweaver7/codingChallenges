using System;
  
// namespace declaration
namespace StackExample {
      
    // Class declaration
    class Stack<T> {
        private static int MAXSIZE = 1000;
        private Array<T> _data;
        private int _index;
        
        public void Stack<T>() {
            _data = new T[MAXSIZE];
        }
        public void Stack<T>(IEnumerable<T> input) {
            _data = input;
        }

        public void peek() {
            return _data[_index];
        }

        public void push(T input) {
            if (_index < MAXSIZE) {
                _index++;
                _data[_index] = input;
                return input;
            }
        }

        public void pop() {
            if (_index >= 0) {
                _index--;
                return _data[_index];
            }
        }
    }
}