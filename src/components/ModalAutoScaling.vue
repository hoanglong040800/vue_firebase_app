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
            <!-- Cluster name demo -->
            <div class="modal-grid-container">
              <div class="modal-grid-item"></div>

              <div class="modal-grid-item grid-item-2-2">
                <label>demo-4c9e6474</label>
              </div>
            </div>
          </div>
        </div>

        <!-- Worker Node -->
        <div class="modal-row">
          <div class="modal-row-title">
            <p>Worker Node</p>
          </div>

          <div class="modal-row-content">
            <!-- Worker Node min -->
            <div class="modal-grid-container">
              <div class="modal-grid-item"></div>

              <div class="modal-grid-item">
                <label>Min</label>
              </div>

              <div class="modal-grid-item">
                <input type="number" class="long-input" />
              </div>

              <div class="modal-grid-item">
                <p>Max</p>
              </div>

              <div class="modal-grid-item">
                <input type="number" class="long-input" />
              </div>
            </div>
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

                <input type="number" class="short-input" />
                <label>%</label>
              </div>

              <div class="modal-grid-item">
                <p>at</p>
              </div>

              <div class="modal-grid-item">
                <input type="number" class="short-input" />
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

                <input type="number" class="short-input" />
                <label>%</label>
              </div>

              <div class="modal-grid-item">
                <p>at</p>
              </div>

              <div class="modal-grid-item">
                <input type="number" class="short-input" />
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
                <input type="number" class="short-input" />
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

                <input type="number" class="short-input" />
                <label>%</label>
              </div>

              <div class="modal-grid-item">
                <p>at</p>
              </div>

              <div class="modal-grid-item">
                <input type="number" class="short-input" />
                <label>seconds</label>
              </div>
            </div>

            <!-- And/Or -->
            <div class="modal-grid-container">
              <div class="modal-grid-item"></div>

              <div class="modal-grid-item grid-item-2-2">
                <fieldset id="scale-down-radio">
                  <div class="radio-container">
                    <input type="radio" value="and" name="scale-down-radio" />
                    <label>And</label>
                  </div>

                  <div class="radio-container radio-container--or">
                    <input type="radio" value="or" name="scale-down-radio" />
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

                <input type="number" class="short-input" />
                <label>%</label>
              </div>

              <div class="modal-grid-item">
                <p>at</p>
              </div>

              <div class="modal-grid-item">
                <input type="number" class="short-input" />
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
                <input type="number" class="short-input" />
                <label>seconds</label>
              </div>

              <div class="modal-grid-item"></div>

              <div class="modal-grid-item"></div>
            </div>
          </div>
          <!-- modal row content -->
        </div>

        <!-- Button -->
        <div class="modal-btn-container">
          <div class="btn-s-container">
            <button>Cancel</button>
            <button>Save</button>
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
  margin: 50px auto;
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
  margin: 0 0 25px 0;
}

/* light blue */
.modal-row-title {
  width: 160px;
  /* background-color: lightblue; */
}

/* light coral */
.modal-row-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* background-color: lightcoral; */
}

/* ---- GRID CONTAINER ---- */

.modal-grid-container {
  display: grid;
  grid-template-columns: 40px 80px auto 40px 120px;
  margin: 0 0 15px 0;
}

/* lightgreen */
.modal-grid-item {
  margin: 0 3px;
  /* background-color: lightgreen; */
  display: flex;
  align-items: center;
}

.modal-grid-item input {
  height: 23px;
}

.modal-grid-item select {
  height: 28px;
}

.modal-grid-item .short-input {
  width: 30px;
  margin: 0 5px 0 5px;
}

.modal-grid-item .long-input {
  width: 100%;
  margin: 0 5px 0 0;
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

#scale-up-radio,
#scale-down-radio {
  display: flex;
}

/* ---- BUTTON ---- */
/* lightsalmon */
.modal-btn-container {
  flex: 1;
  display: flex;
  justify-content: center;
  /* background-color: lightsalmon; */
}

.btn-s-container {
  width: 200px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}

.modal-btn-container button {
  width: 80px;
  height: 40px;
}
</style>