const element = document.querySelector("#element");
const startTime = Date.now();
const duration = 4000;
const letters = element.dataset.text.split("");
const steps = letters.length;

const map = (n, x1, y1, x2, y2) => Math.min(Math.max(((n - x1) * (y2 - x2)) / (y1 - x1) + x2, x2), y2);

const random = (set) => set[Math.floor(Math.random() * set.length)];

let frame;

(function animate() {
  frame = requestAnimationFrame(animate);

  const step = Math.round(map(Date.now() - startTime, 0, duration, 0, steps));

  element.innerText = letters
    .map((s, i) => (step - 1 >= i ? letters[i] : random("0123456789")))
    .join("");

  if (step >= steps) {
    cancelAnimationFrame(frame);
  }
})(); 

function S1312551231() {
  console.log('%c   \r\n                             __xxxxxxxxxxxxxxxx___.\r\n                        _gxXXXXXXXXXXXXXXXXXXXXXXXX!x_\r\n                   __x!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!x_\r\n                ,gXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx_\r\n              ,gXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!_\r\n            _!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!.\r\n          gXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXs\r\n        ,!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!.\r\n       g!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!\r\n      iXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!\r\n     ,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx\r\n     !XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx\r\n   ,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx\r\n   !XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXi\r\n  dXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\r\n  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\r\n  !XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\r\n   XXXXXXXXXXXXXXXXXXXf~~~VXXXXXXXXXXXXXXXXXXXXXXXXXXvvvvvvvvXXXXXXXXXXXXXX!\r\n   !XXXXXXXXXXXXXXXf`       \'XXXXXXXXXXXXXXXXXXXXXf`          \'~XXXXXXXXXXP\r\n    vXXXXXXXXXXXX!            !XXXXXXXXXXXXXXXXXX!              !XXXXXXXXX\r\n     XXXXXXXXXXv`              \'VXXXXXXXXXXXXXXX                !XXXXXXXX!\r\n     !XXXXXXXXX.                 YXXXXXXXXXXXXX!                XXXXXXXXX\r\n      XXXXXXXXX!                 ,XXXXXXXXXXXXXX                VXXXXXXX!\r\n      \'XXXXXXXX!                ,!XXXX ~~XXXXXXX               iXXXXXX~\r\n       \'XXXXXXXX               ,XXXXXX   XXXXXXXX!             xXXXXXX!\r\n        !XXXXXXX!xxxxxxs______xXXXXXXX   \'YXXXXXX!          ,xXXXXXXXX\r\n         YXXXXXXXXXXXXXXXXXXXXXXXXXXX`    VXXXXXXX!s. __gxx!XXXXXXXXXP\r\n          XXXXXXXXXXXXXXXXXXXXXXXXXX!      \'XXXXXXXXXXXXXXXXXXXXXXXXX!\r\n          XXXXXXXXXXXXXXXXXXXXXXXXXP        \'YXXXXXXXXXXXXXXXXXXXXXXX!\r\n          XXXXXXXXXXXXXXXXXXXXXXXX!     i    !XXXXXXXXXXXXXXXXXXXXXXXX\r\n          XXXXXXXXXXXXXXXXXXXXXXXX!     XX   !XXXXXXXXXXXXXXXXXXXXXXXX\r\n          XXXXXXXXXXXXXXXXXXXXXXXXx_   iXX_,_dXXXXXXXXXXXXXXXXXXXXXXXX\r\n          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXP\r\n          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!\r\n           ~vXvvvvXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXf\r\n                    \'VXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXvvvvvv~\r\n                      \'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX~\r\n                  _    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXv`\r\n                 -XX!  !XXXXXXX~XXXXXXXXXXXXXXXXXXXXXX~   Xxi\r\n                  YXX  \'~ XXXXX XXXXXXXXXXXXXXXXXXXX`     iXX`\r\n                  !XX!    !XXX` XXXXXXXXXXXXXXXXXXXX      !XX\r\n                  !XXX    \'~Vf  YXXXXXXXXXXXXXP YXXX     !XXX\r\n                  !XXX  ,_      !XXP YXXXfXXXX!  XXX     XXXV\r\n                  !XXX !XX           \'XXP \'YXX!       ,.!XXX!\r\n                  !XXXi!XP  XX.                  ,_  !XXXXXX!\r\n                  iXXXx X!  XX! !Xx.  ,.     xs.,XXi !XXXXXXf\r\n                   XXXXXXXXXXXXXXXXX! _!XXx  dXXXXXXX.iXXXXXX\r\n                   VXXXXXXXXXXXXXXXXXXXXXXXxxXXXXXXXXXXXXXXX!\r\n                   YXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXV\r\n                    \'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!\r\n                    \'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXf\r\n                       VXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXf\r\n                         VXXXXXXXXXXXXXXXXXXXXXXXXXXXXv`\r\n                          ~vXXXXXXXXXXXXXXXXXXXXXXXf`\r\n                              ~vXXXXXXXXXXXXXXXXv~\r\n                                 \'~VvXXXXXXXV~~\r\n                                       ~~\r\n BRECHA DE SEGURIDAD ENCONTRADA EN "java.js(P12312312)"', 'color: green;')
}

function P12312312() {
  console.log('%c USUARIO: $TU$D#NT | CONTRASEÑA: NExVUlVSNCEk (base64) \r\n Para una pista ejecuta "pista()"', 'color: green;');  
}

function pista() {
  console.log('%c La contraseña esta encriptada en base64, puedes desencriptarla buscando "base 64 decode" en google', 'color: green;');
}

function verif() {
  var user = "$TU$D#NT";
  var secret = "4LURUR4!$";
  var input = document.querySelector("#password");
  var inpUser = document.querySelector("#user");

  if (input.value == secret && inpUser.value == user) {
  window.location.href="./d.html";
  } else {
    console.log("no pasa")
    let notify = document.getElementById("err");
    notify.innerHTML = " Usuario o Contraseña invalida (revisa los comentarios en el código fuente)";
    notify.style.display = "block";
    setTimeout(function() {
    notify.style.display = "none";
  }, 3000);
  }
}
