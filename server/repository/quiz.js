/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 10. 9
 * Time: 오후 9:11
 * To change this template use File | Settings | File Templates.
 */
'use strict';
var _ = require('lodash');

var quiz = [
    {
        id: 1,
        title: '이 중 다른 셋과 동작이 다른 언어 하나를 고르시오',
        answers: [
            "Java",
            "Go",
            "Groovy",
            "Scala"
        ],
        solution: 1
    },
    {
        id: 2,
        title: '자바스크립트의 특성이 아닌 것을 고르시오',
        answers: [
            "일급 객체는 함수",
            "영향을 준 언어는 Self 언어와 Scheme 언어",
            "선언형 프로그래밍 언어",
            "객체 타입과 기본 타입이 함께 사용"
        ],
        solution: 3
    },
    {
        id: 3,
        title: 'HTML의 약자는',
        answers: [
            "High Text Module Language",
            "Hiper Text Markup Language",
            "Higher Tool Major Language",
            "How To Make Love"
        ],
        solution: 2
    },
    {
        id: 4,
        title: 'C++의 개발자는',
        answers: [
            "귀도 반 로섬",
            "제임스 고슬링",
            "데니스 리치",
            "비야네 스트로스트럽"
        ],
        solution: 2
    },
    {
        id: 5,
        title: 'Java언어에서 다음 중 런타임 오류가 발생하는 코드는?',
        answers: [
            "<pre class='code'><code class='java'>List&lt;Number&gt; n = new ArrayList&lt;Number&gt;();\n" +
            "n.add(20);\n" +
            "</code></pre>",
            "<pre class='code'><code>List&lt;Number&gt; a = new ArrayList&lt;Number&gt;();\n" +
            "List&lt;String&gt; b = new ArrayList&lt;String&gt;();\n" +
            "if(a.getClass() != b.getClass()) {\n" +
                "\tthrow new RuntimeException();\n" +
            "}" +
            "</code></pre>",
            "<pre class='code'><code>int Integer = 3;\n" +
            "(Integer) - (Integer)3" +
            "</code></pre>",
            "<pre class='code'><code>new OutputStreamReader(System.out, 'UTF-8').write(''.getBytes())</code></pre>"
        ],
        solution: 1
    }
];

module.exports = {
    list: function() {
        return quiz.map(function(val) {
            var c = _.clone(val);
            delete c.solution;
            return c;
        });
    },
    check: function(answers) {
        var score = 0, solution = 0;

        for(var i= 0, len = quiz.length; i < len; i++) {
            solution = quiz[i].solution;
            if(solution === answers[i]) {
                score++;
            }
        }

        return score * 10;
    },
    findById: function(id) {
        return _.clone(_.find(quiz, function(q) {
            return q.id === id
        }));
    }
};
