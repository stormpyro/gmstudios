<template>
  <vs-row>
    <vs-col
      style="
        align-items: flex-start;
        flex-direction: column;
        padding: 40px 60px;
      "
    >
      <h2>Formacion Profesional</h2>
      <vs-row style="display: flex; justify-content: center">
        <vs-col sm="12" w="8">
          <vs-row style="display: flex">
            <vs-col w="12" style="display: flex; justify-content: center">
              <img
                style="max-width: 100%; max-height: 300px"
                :src="require('../public/images/hammereditado.png')"
                alt="hammer"
              />
            </vs-col>
            <vs-col w="12">
              <h3>Gilberto Minaya Cerna</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                sapiente facilis eveniet doloribus vero, voluptatum nisi sint
                dolores ipsum asperiores ipsam aspernatur quo error doloremque
                nobis deleniti deserunt, quidem at.
              </p>
              <p>
                Miembro del colegio de abogados de lima.
                <strong>CAL: 1454212</strong>
              </p>
            </vs-col>
          </vs-row>
          <vs-row style="flex-direction: column">
            <h3>Areas de especializacion</h3>
            <ul>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
            </ul>
          </vs-row>
          <vs-row style="flex-direction: column">
            <h3>Formacion Academica</h3>
            <ul>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
            </ul>
          </vs-row>
          <vs-row style="flex-direction: column">
            <h3>Experiencia Profesional</h3>
            <ul>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
              <li>Lorem ipsum dolor sitDucimus dolorem, saepe voluptatibus</li>
            </ul>
          </vs-row>
        </vs-col>
      </vs-row>
    </vs-col>
  </vs-row>
</template>