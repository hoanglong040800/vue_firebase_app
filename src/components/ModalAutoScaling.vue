<template>
  <div class="backdrop">
    <div class="modal">
      <div class="modal-header">
        <h4>Auto Scaling</h4>

        <button>X</button>
      </div>

      <div class="modal-body">
        <!-- Cluster Name -->
        <div class="modal-row">
          <div class="modal-row-title">
            <p>Cluster Name</p>
          </div>

          <div class="modal-row-content">
            <p>Content</p>
          </div>
        </div>

        <!-- Worker Node -->
        <div class="modal-row">
          <div class="modal-row-title">
            <p>Worker Node</p>
          </div>

          <div class="modal-row-content">
            <p>Content</p>
          </div>
        </div>

        <!-- Scale Up -->
        <div class="modal-row">
          <div class="modal-row-title">
            <p>Scale Up</p>
          </div>

          <div class="modal-row-content">
            <!-- Memory -->
            <div class="modal-grid-container">
              <div class="modal-grid-item">
                <input type="checkbox" />
              </div>

              <div class="modal-grid-item">
                <label>Memory</label>
              </div>

              <div class="modal-grid-item">
                <select>
                  <option value="average">Average</option>
                  <option value="max">Max</option>
                  <option value="min">Min</option>
                </select>

                <input type="number" />
                <label>%</label>
              </div>

              <div class="modal-grid-item">
                <p>at</p>
              </div>

              <div class="modal-grid-item">
                <input type="number" />
                <label>seconds</label>
              </div>
            </div>

            <!-- And/Or -->
            <div class="modal-grid-container">
              <div class="modal-grid-item"></div>

              <div class="modal-grid-item grid-item-2-2">
                <fieldset id="scale-up-radio">
                  <div class="radio-container">
                    <input type="radio" value="and" name="scale-up" />
                    <label>And</label>
                  </div>

                  <div class="radio-container radio-container--or">
                    <input type="radio" value="or" name="scale-up" />
                    <label>Or</label>
                  </div>
                </fieldset>
              </div>

              <div class="modal-grid-item"></div>

              <div class="modal-grid-item"></div>

              <div class="modal-grid-item"></div>
            </div>

            <!-- CPU -->
            <div class="modal-grid-container">
              <div class="modal-grid-item">
                <input type="checkbox" />
              </div>

              <div class="modal-grid-item">
                <label>CPU</label>
              </div>

              <div class="modal-grid-item">
                <select>
                  <option value="average">Average</option>
                  <option value="max">Max</option>
                  <option value="min">Min</option>
                </select>

                <input type="number" />
                <label>%</label>
              </div>

              <div class="modal-grid-item">
                <p>at</p>
              </div>

              <div class="modal-grid-item">
                <input type="number" />
                <label>seconds</label>
              </div>
            </div>

            <!-- Warm Up -->
            <div class="modal-grid-container">
              <div class="modal-grid-item"></div>

              <div class="modal-grid-item">
                <label>Warm Up</label>
              </div>

              <div class="modal-grid-item">
                <input type="number" />
                <label>seconds</label>
              </div>

              <div class="modal-grid-item"></div>

              <div class="modal-grid-item"></div>
            </div>
          </div>
          <!-- modal row content -->
        </div>

        <!-- Scale Down -->
        <div class="modal-row">
          <div class="modal-row-title">
            <p>Scale Down</p>
          </div>

          <div class="modal-row-content">
            <p>Content</p>
          </div>
        </div>
      </div>
      <!-- modal-body -->
    </div>
  </div>
</template>


<style scoped>
.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  /* test */
  font-size: 16px;
}

.modal {
  display: flex;
  flex-direction: column;
  width: 650px;
  margin: 100px auto;
  background-color: #fff;
  border: 1px solid #000;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid black;
  background-color: #bababa;
}

.modal-body {
  flex: 1;
  padding: 20px;
}

.modal-row {
  display: flex;
  margin: 10px 0;
}

.modal-row-title {
  width: 180px;
  background-color: lightblue;
}

.modal-row-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: lightcoral;
}

.modal-grid-container {
  display: grid;
  grid-template-columns: 40px 80px auto 30px 120px;
  margin: 10px 0;
}

.modal-grid-item {
  margin: 0 3px;
  background-color: lightgreen;
  display: flex;
  align-items: center;
}

.modal-grid-item input {
  height: 23px;
}

.modal-grid-item select {
  height: 28px;
}

.modal-grid-item input[type="number"] {
  width: 30px;
  margin: 0 5px 0 5px;
}

.grid-item-2-2 {
  grid-column: 2 / span 2;
}

.radio-container {
  display: flex;
  align-items: center;
}

.radio-container--or {
  margin-left: 25px;
}

#scale-up-radio {
  display: flex;
}
</style>